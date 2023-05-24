/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_LOCAL_STORAGE_LANGUAGE_KEY: string
    readonly VITE_LOCAL_STORAGE_TOKEN_KEY: string
    readonly VITE_API_BASE_URL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}