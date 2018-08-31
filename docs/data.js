export default {
    title: 'Neofonie Tech Radar — 2018.07 !!! WorkInProgress !!!',
    width: 1450,
    height: 1000,
    colors: {
        background: '#fff',
        grid:       '#bbb',
        inactive:   '#ddd'
    },
    quadrants: [
        { name: 'Platforms' },                  // 0
        { name: 'Infrastructure' },             // 1
        { name: 'Frameworks' },                 // 2
        { name: 'Data Management' }             // 3
    ],
    rings: [
        { name: 'ADOPT',  color: '#93c47d' },   // 0
        { name: 'TRIAL',  color: '#93d2c2' },   // 1
        { name: 'ASSESS', color: '#fbdb84' },   // 2
        { name: 'HOLD',   color: '#efafa9' }    // 3
    ],
    svg_id: 'radar',
    print_layout: true,
    // zoomed_quadrant: 0,
    //
    // ENTRIES
    //
    entries: [
        //
        // Platforms
        //
        {
            quadrant: 0,
            ring: 0,
            label: 'Java',
            active: false,
            moved: 0
        },
 	{
            quadrant: 0,
            ring: 0,
            label: 'Python',
            active: false,
            moved: 0
        },
	{
            quadrant: 0,
            ring: 0,
            label: 'Go',
            active: false,
            moved: 0
        },
 	{
            quadrant: 0,
            ring: 0,
            label: 'Scala',
            active: false,
            moved: 0
        },
 	{
            quadrant: 0,
            ring: 0,
            label: 'Amazon Sagemaker',
            active: false,
            moved: 0
        },
	{
            quadrant: 0,
            ring: 1,
            label: 'Ruby',
            active: false,
            moved: 0
        },
 	{
            quadrant: 0,
            ring: 1,
            label: 'AngularJS',
            active: false,
            moved: 0
        },
	{
            quadrant: 0,
            ring: 1,
            label: 'R',
            active: false,
            moved: 0
        },
        {
            quadrant: 0,
            ring: 2,
            label: 'node.js',
            active: false,
            moved: 0
        },
 	{
            quadrant: 0,
            ring: 3,
            label: 'Clojure',
            active: false,
            moved: 0
        },
        //
        // Infrastructure
        //
        {
            quadrant: 1,
            ring: 0,
            label: 'Docker',
            active: false,
            moved: 0
        },
	{
            quadrant: 1,
            ring: 0,
            label: 'Docker-Swarm',
            active: false,
            moved: 0
        },
	{
            quadrant: 1,
            ring: 2,
            label: 'Kubernetes',
            active: false,
            moved: 0
        },
	{
            quadrant: 1,
            ring: 2,
            label: 'AWS ML / Lambda',
            active: false,
            moved: 0
        },
	{
            quadrant: 1,
            ring: 2,
            label: 'Microsoft Azure',
            active: false,
            moved: 0
        },
	{
            quadrant: 1,
            ring: 2,
            label: 'Google Cloud',
            active: false,
            moved: 0
        },
	{
            quadrant: 1,
            ring: 2,
            label: 'Jupyter',
            active: false,
            moved: 0
        },
        //
        // Frameworks
        //
        {
            quadrant: 2,
            ring: 0,
            label: 'MXNet',
            active: false,
            moved: 0
        },
	{
            quadrant: 2,
            ring: 0,
            label: 'OpenNLP',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: 'Spring Boot',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: 'Word2Vec',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 0,
            label: 'Keras',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 1,
            label: 'Mallet',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 1,
            label: 'TensorFlow',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 1,
            label: 'Theano',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 1,
            label: 'jest',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 1,
            label: 'Scrapy',
            active: false,
            moved: 0
        },
	{
            quadrant: 2,
            ring: 1,
            label: 'Tesseract',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'Deeplearning4j',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'AllenNLP',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'Fast.AI',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'PyTorch',
            active: false,
            moved: 1
        },
        {
            quadrant: 2,
            ring: 2,
            label: 'Spacy',
            active: false,
            moved: 0
        },
        {
            quadrant: 2,
            ring: 3,
            label: 'RASA NLU',
            active: false,
            moved: 1
        },
        {
            quadrant: 2,
            ring: 0,
            label: 'txtwerk',
            active: false,
            moved: 1
        },
        //
        // Data Management
        //
        {
            quadrant: 3,
            ring: 0,
            label: 'Apache Kafka',
            active: false,
            moved: 0
        },
 	{
            quadrant: 3,
            ring: 0,
            label: 'Apache SOLR',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 0,
            label: 'Elasticsearch',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 0,
            label: 'Tableau',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 1,
            label: 'Apache Cassandra',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 1,
            label: 'Apache Spark',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 1,
            label: 'Apache Beam',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 1,
            label: 'Redis',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 1,
            label: 'Apache Zeppelin',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 2,
            label: 'Apache Flink',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 3,
            label: 'Ontotext GraphDB',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 3,
            label: 'Apache Flume',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 3,
            label: 'Virtuoso',
            active: false,
            moved: 0
        },
	{
            quadrant: 3,
            ring: 3,
            label: 'Apache Pig',
            active: false,
            moved: 0
        }
	
    ]
};
