export default (str: string) => {
  const result = str.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1')
  return result.charAt(0).toUpperCase() + result.slice(1)
}
