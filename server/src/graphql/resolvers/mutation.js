import listMutations  from './mutations/list.mutation.js'
import stepsMutations from './mutations/steps.mutation.js'
import taskMutations from './mutations/task.mutation.js'

export default { ...listMutations, ...stepsMutations, ...taskMutations }