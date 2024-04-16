import type { ISkill } from '@/typescriptDefinitions/ISkill'

const formatSkills = (
  items: Array<ISkill>,
  maxItemsBeforeResume: number = 3,
  separator: string = ','
) => {
  const itemsLength = items.length
  let formattedItemsAsSingleLine = ''
  if (itemsLength) {
    const itemList = items.map((item) => item.name)
    if (itemsLength > maxItemsBeforeResume) {
      const remainingSkills = itemsLength - maxItemsBeforeResume
      const remainingSkillsWord = remainingSkills > 1 ? 'Skills' : 'Skill'
      formattedItemsAsSingleLine = `${itemList.slice(0, maxItemsBeforeResume).join(`${separator}`)} and ${remainingSkills}+ ${remainingSkillsWord}`
    } else {
      formattedItemsAsSingleLine = `${itemList.join(`${separator}`)}`
    }
  }
  return formattedItemsAsSingleLine
}

export { formatSkills }
