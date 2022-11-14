
const interpolation = {
    title:"Biomarker Interpolation📊",
    descriptionShort:"Given a time-series set of biomarker datapoints, to what extent can we non-linearlly interpolate missing values?",
    descriptionFull:"Say we have a patient with a handful of longitudinally monitored biomarkers. Serum creatinine, serum potassium, blood pressure, height, weight, and serum glucose. This patient has a continuous glucose monitor, and can also monitor blood pressure at home, but they need to see their physician to measure the other values using blood tests. Is there a way we can upsample the resolution of these invasive and expertise-requiring data points using the context from the other data-points with higher temporal resolution (CGM, blood pressure)? There are a handful of methodologies that come to mind here, while I'm really interested in the applications of temporal conv-nets --because the name sounds cool-- transformers seem like a more viable solution given the attention mechanism. This is a project I'd like to spend more time on, and will hopefully pursue with our head of ML research at Actually.",
    links:['https://openreview.net/pdf?id=mXbhcalKnYM','https://www.sciencedirect.com/science/article/pii/S1877050920316914'],
    images:[]
}

export default interpolation