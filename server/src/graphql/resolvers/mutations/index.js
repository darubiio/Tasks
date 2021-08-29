import listMutations  from './listMutation.js'
import stepsMutations from './stepsMutation.js'
import taskMutations from './taskMutation.js'
import userMutations from './userMutation.js'

export default { ...listMutations, ...stepsMutations, ...taskMutations, ...userMutations }