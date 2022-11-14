// lifesci
import actually from "./healthcare/actually";
import generics from "./healthcare/generics"
import socialEnterprise from './healthcare/socialEnterprise'
import interpolation from './healthcare/biomarkerInterpolation'
import remote from './healthcare/remoteCheckUps'
// healthcare
import repurposing from './lifesci/drugRepurpose'
import phaseIV from './lifesci/phaseIV'
import abyssinia from './lifesci/abyssinia'
import company2vec from './lifesci/company2vec'
// software
import computerVision from './software/computerVision'
import domainAdaptation from './software/domainAdaptation'
import dataVis from './software/dataVis';
import tagger from './software/tagger'
import thissite from './software/thissite'



const projects = {
    lifesci:[abyssinia,generics,repurposing,interpolation,phaseIV],
    software:[tagger,domainAdaptation,computerVision,dataVis,thissite],
    healthcare:[actually,phaseIV,socialEnterprise,interpolation,remote],
    other:[company2vec]
}

export default projects