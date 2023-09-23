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

declare const enum CoreTypeS {
    rhino = "rhino",
    frida = "frida",
}

declare const enum CoreTypeN {
    rhino = 1,
    frida = 2,
}

declare type Manifest = {
    id: string,
    title: string,
    type: CoreTypeS,
    desc: string | null,
    markdown: string | null,
    version: string,
    ctime: string,
}

declare type DistManifest = Manifest & {
    author: string,
    source: string | null,
    url: string,
    down_count: number | null,
}
