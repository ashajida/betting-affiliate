type Game = {
    title: string,
    image: Image,
    link: string
}

type Image = {
    _type: string,
    source: Record<any, any>
}

type Bonus = {
    title: string,
    image: Image,
    link: string
}

type SearchParams = {
    q: string
}