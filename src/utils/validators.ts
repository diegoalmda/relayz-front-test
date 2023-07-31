function createURLRegex() {
  // Regex components
  const protocol = '(https?:\\/\\/)?' // Matches 'http://' or 'https://'
  const domain = '(www\\.)?[a-zA-Z0-9\\-]+(\\.[a-zA-Z]{2,})' // Matches domain names (e.g., www.example.com)
  const port = '(:\\d+)?' // Matches optional port number (e.g., :8080)
  const path = '(\\/[a-zA-Z0-9_\\-\\./]*)?' // Matches optional path (e.g., /page or /path/to/file)
  const query = '(\\?[a-zA-Z0-9_\\-=&]*)?' // Matches optional query string (e.g., ?param=value&param2=value2)
  const fragment = '(#[a-zA-Z0-9_\\-]*)?' // Matches optional fragment identifier (e.g., #section)

  // Combine components into the final regex
  const urlRegex = new RegExp(
    `^${protocol}${domain}${port}${path}${query}${fragment}$`,
    'i'
  )
  return urlRegex
}

function createDateRegex() {
  // Regex components
  const year = '\\d{4}'
  const month = '(0[1-9]|1[0-2])'
  const day = '(0[1-9]|[1-2]\\d|3[0-1])'

  // Combine components into the final regex
  const dateRegex = new RegExp(`^${year}-${month}-${day}$`)
  return dateRegex
}

const dateValidator = createDateRegex()

const urlValidator = createURLRegex()

export { dateValidator, urlValidator }
