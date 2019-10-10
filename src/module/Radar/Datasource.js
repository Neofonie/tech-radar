import crypto from 'crypto';
import Module from "../../Module";

export default class extends Module {
    constructor(args) {
        super();

        return new Promise((resolve, reject) => {
            this.label = 'DATASOURCE';
            console.log(this.label, 'INIT');

            this.radar = args;

            this.secret = 'erdbeerkuchen';
            this.storage_prefix = 'techradar_';
            this.storage = localStorage;
            this.cache_age = 0;

            this.baseUrl = `${document.location.origin}${document.location.pathname}`;
            this.dataIndexUrl = `${this.baseUrl}data/index.json`;
            this.configUrl = false;

            this.dataIndex = false;     // the index of all ids
            this.dataSet = false;       // the selected dataset
            this.dataVersion = false;   // the selected version
            this.data = false;          // the dots data

            this.config = false;

            this
                .getDataIndex()
                .then(dataIndex => {
                    this.dataIndex = dataIndex;
                    this.cache_age = (this.dataSet.cache_age || 0) * 60 * 60; // seconds * minutes = (one) hour(s)
                    
                    let defaultData = this.dataIndex.filter(i => i.default)[0];
                    if(this.radar.controls.id)
                        defaultData = this.dataIndex.filter(i => i.id === this.radar.controls.id)[0];

                    const defaultVersion = defaultData.version || this.radar.controls.version;
                    return this.selectDataSet(defaultData.id, defaultVersion);
                })
                .then(() => {
                    this.emit('ready');
                });

            this.on('ready', () => {
                resolve(this);
            });
        });
    }

    selectDataSet(id, version) {
        this.dataSet = this.dataIndex.filter(i => i.id === id)[0];
        if (!this.dataSet)
            return false;

        document.querySelector('body').classList.add('loading');

        return new Promise((resolve, reject) => {
            this.getConfig()
                .then(config => {
                    this.config = config;
                    this.dataVersion = version;
                    return this.getData();
                })
                .then(data => {
                    this.data = data.map((dot, index) => {
                        return {
                            index: index,
                            ...dot
                        }
                    });
                    document.querySelector('body').classList.remove('loading');
                    resolve(this);
                });
        });
    }

    getDataIndex() {
        return this.fetch(this.dataIndexUrl)
            .then(data => {
                return data;
            });
    }

    getConfig(id) {
        if (!id)
            id = this.dataSet.id;

        this.configUrl = `${this.baseUrl}data/${id}/config.json`;
        return this.fetch(this.configUrl)
            .then(data => {
                return data;
            });
    }

    getData(id, version) {
        if (!id)
            id = this.dataSet.id;

        if (!version)
            version = this.dataVersion;

        this.dataUrl = `${this.baseUrl}data/${id}/${version}.json`;
        return this.fetch(this.dataUrl)
            .then(data => {
                return data;
            });
    }

    fetch(url) {
        if (!url)
            return false;

        const now = parseInt(Date.now() / 1000);
        const hash = crypto
            .createHmac('sha256', this.secret)
            .update(url)
            .digest('hex');

        if (parseInt(this.getStorageJson('posts_date')) > now - this.cache_age) {
            this.data = this.getStorageJson('posts');
            return Promise.resolve(this.data);
        }

        /**
         * continue here
         */

        const requestOptions = {
            method: 'GET'
        };
        return fetch(url, requestOptions)
            .then(response => {
                if (!response.ok)
                    return Promise.reject(response.statusText);

                return response.json();
            })
            .then(data => {
                if (data) {
                    this.data = data;
                    this.setStorageJson('posts', data, hash);
                }
                return data;
            });
    }

    hasId(id) {
        return this.dataIndex.filter(i => i.id === id)[0];
    }

    hasVersion(version) {
        return this.dataSet.versions.includes(version);
    }

    getStorageJson(field) {
        if (this.storage[`${this.storage_prefix}${field}`]) {
            try {
                return JSON.parse(this.storage[`${this.storage_prefix}${field}`]);
            } catch (e) {
                console.log('>>> ERROR', e);
            }
            return [];
        }
    }

    setStorageJson(field, data, hash) {
        if (!field || !data)
            return false;

        try {
            this.storage[`${this.storage_prefix}${field}_date`] = parseInt(Date.now() / 1000);
            this.storage[`${this.storage_prefix}${field}_hash`] = hash;
            this.storage[`${this.storage_prefix}${field}`] = JSON.stringify(data);
        } catch (e) {
            console.log('>>> ERROR', e);
        }
    }
}