// lifesci
import actually from "./healthcare/actually";
import generics from "./healthcare/generics"
import socialEnterprise from './healthcare/socialEnterprise'
// healthcare
import repurposing from './lifesci/drugRepurpose'
import phaseIV from './lifesci/phaseIV'
import abyssinia from './lifesci/abyssinia'
// software
import computerVision from './software/computerVision'
import domainAdaptation from './software/domainAdaptation'
import dataVis from './software/dataVis';
import tagger from './software/tagger'



const projects = {
    lifesci:[abyssinia,phaseIV,repurposing],
    software:[tagger,domainAdaptation,computerVision,dataVis],
    healthcare:[actually,generics,socialEnterprise],
    other:[]
}

export default projects