const domainAdaptation = {
    title:"Domain Adapted Language Models🐱‍💻",
    descriptionShort:"Building the worlds deepest colloquial health language corpus, domain adapting pubmedBioBert, noisily labeling a NER dataset, and getting that sweet sweet SOTA",
    descriptionFull:"I noticed none of the flagship health language models were built to identify colloquial health language (the language that patients use) and instead were all trained on scientific literature or clinical notes. I built a 10gb corpus of patient language programatically with web scraping, domain adapted a model using pytorch and huggingface, used my own noisy labeling library to tag entities, and trained what I consider the worlds best model for extracting colloquial health entities (you're always SOTA if you're the only one with the dataset :D)",
    links:[],
    image:''
}

export default domainAdaptation