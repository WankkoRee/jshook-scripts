declare type Main = {
    name: string,
    icon: string | null,
    list: string,
    push: string | null,
    markdown: string | null,
    group_qq: string | null,
    group_tg: string | null,
    user_count: number | null,
}

declare type Manifest = {
    id: string,
    title: string,
    type: import("./enum").CoreTypeS,
    desc: string | null,
    version: string,
    ctime: string,
}

declare type DistManifest = Manifest & {
    author: string,
    markdown: string | null,
    source: string | null,
    url: string,
    down_count: number | null,
}
