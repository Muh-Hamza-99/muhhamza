interface PostMetadata {
    slug: string
    title: string
    description: string
    date: string
}

interface Post extends PostMetadata {
    content: string
}

interface Experience {
    name: string
    description: string
    image: string
    content: string
}

interface Project {
    name: string
    description: string
    image: string
    content: string
}