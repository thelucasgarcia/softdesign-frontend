/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_MARVEL_PUBLIC_KEY: string
    readonly VITE_MARVEL_PRIVATE_KEY: string
    readonly VITE_MAILJS_SERVICE: string
    readonly VITE_MAILJS_TEMPLATE: string
    readonly VITE_MAILJS_PUBLICKEY: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}