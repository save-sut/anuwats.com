export const copyToClipboard = (text: string): Promise<void> =>
  new Promise((resolve, reject) => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard

      cb.writeText(text).then(resolve).catch(reject)
    } else {
      try {
        const body = document.querySelector('body')

        const textarea = document.createElement('textarea')
        body?.appendChild(textarea)

        textarea.value = text
        textarea.select()

        // Copy the text inside the text field
        navigator.clipboard.writeText(textarea.value);
        // document.execCommand('copy') // deprecated!

        body?.removeChild(textarea)

        resolve()
      } catch (e) {
        reject(e)
      }
    }
  })