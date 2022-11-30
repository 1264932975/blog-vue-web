export const changeTitle = (title, keywords, description) => {
    document.title = title
    document.querySelector('meta[name="keywords"]').setAttribute('content', keywords)
    document.querySelector('meta[name="description"]').setAttribute('content', description)
}
