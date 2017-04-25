import * as Movies from './Movies'
import * as TvShows from './TvShows'
import * as Directors from './Directors'

const everything = [
  ...Movies.getAll(),
  ...TvShows.getAll(),
  ...Directors.getAll(),
]

function getMatchCount (text, reg) {
  const match = text.match(reg)
  if (match) {
    return match.length
  } else {
    return 0
  }
}

export function search (text) {
  const wordsReg = new RegExp(text.replace(/\s+/g, '\\b|\\b'), 'ig')
  const results = everything.reduce((list, item) => {
    const score = getMatchCount(item.name, wordsReg)
    if (score > 0) {
      list.push({
        score,
        item,
      })
    }
    return list
  }, [])
  results.sort((a, b)=> b.score - a.score)
  console.log(results.length, 'results')
  return results
}
