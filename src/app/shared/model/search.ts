import { ChannelData } from "./topics";

export type SearchResultModel = {
    title: string,
    videoId: string,
    description: string,
    thumbnail: string,
    channelTitle: string
}

export type SearchQueryModel = {
    term: string,
    channels: ChannelData[]
}