import type { ISkill } from '@/typescriptDefinitions/ISkill'

const formatSkills = (
  items: Array<ISkill>,
  maxItemsBeforeResume: number = 3,
  separator: string = ','
) => {
  const itemsLength = items.length
  let formattedItemsAsSingleLine = ''
  if (itemsLength) {
    if (itemsLength > maxItemsBeforeResume) {
      const remainingSkills = itemsLength - maxItemsBeforeResume
      const remainingSkillsWord = remainingSkills > 1 ? 'Skills' : 'Skill'
      formattedItemsAsSingleLine = `${items.slice(0, maxItemsBeforeResume).join(`${separator}`)} and ${remainingSkills}+ ${remainingSkillsWord}`
    } else {
      formattedItemsAsSingleLine = `${items.join(`${separator}`)}`
    }
  }
  return formattedItemsAsSingleLine
}

export { formatSkills }
