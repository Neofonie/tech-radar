import Module from "../../Module";

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'MENU';

        this.radar = radar;
        this.items = [];

        this.on('version-selected', (selectedRadar, version) => {

        });

        const target = document.createElement('div');
        target.id = 'menu';
        target.className = 'menu';
        document.querySelector('body').append(target);
        this.target = document.getElementById('menu');

        const inner = document.createElement('div');
        inner.classList.add('inner');

        this.openButton = document.createElement('a');
        this.openButton.classList.add('open');
        this.openButton.onclick = e => this.toggle(e);
        inner.append(this.openButton);

        this.radarButtons = {};
        this.versionButtons = {};
        this.radar.dataSource.radarIndex.forEach(i => {
            const radar = document.createElement('div');
            radar.classList.add('radar');

            const radarButton = document.createElement('a');
            radarButton.classList.add('label');
            radarButton.innerHTML = `${i.label}`;
            //radarButton.onclick = e => this.select(i, e);

            radar.append(radarButton);
            this.radarButtons[i.id] = radarButton;

            if (i.versions)
                i.versions.forEach(ii => {
                    const versionButton = document.createElement('a');
                    versionButton.innerHTML = `${ii}`;
                    versionButton.classList.add('version');
                    versionButton.onclick = e => this.selectVersion(i, ii, e);

                    if (!this.versionButtons[i.id])
                        this.versionButtons[i.id] = [];
                    this.versionButtons[i.id].push(versionButton);
                    radar.append(versionButton);
                });

            inner.append(radar);
        });
        this.target.append(inner);
        //this.selectVersion(this.radar.dataSource.selectedRadar,this.radar.dataSource.selectedRadar.versions[0]);
    }

    draw() {
    }

    toggle(e) {
        this.target.classList.contains('opened') ? this.close(e) : this.open(e);
    }

    open(e) {
        this.target.classList.add('opened');
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    close(e) {
        this.target.classList.remove('opened');
    }

    select(radar, e) {
        if (e) {
            e.preventDefault();
        }
        this.openButton.innerHTML = radar.label;
    }

    selectVersion(selectedRadar, version) {
        console.log('>>>', this.label.padStart(15,' '), '>', 'MENU SELECT VERSION', selectedRadar, version);
        this.close();
        this.emit('version-selected', selectedRadar, version);
    }

    drawVersion(id, version){
        const selectedRadar = this.radar.dataSource.oneRadar(id);
        console.log('>>>', this.label.padStart(15,' '), '>', 'MENU DRAW VERSION', selectedRadar, version);
        this.openButton.innerHTML = selectedRadar.label;
        this.openButton.setAttribute('data-version', version);
    }
}