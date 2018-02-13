export const ALL_CHANNELS: ChannelsData[] = [
    { 
        topic: "React",
        channels:[
        {
            name        : "ReactNYC",
            channelId   : 'UC87H0RRqawG6I7oWAf9i48g'
        },
        {
            name        : "React Amsterdam",     
            channelId   : 'UCsFrt8oKNYXGspSlX9u6uXw'
        }],
    },
    { 
        topic: "Angular",
        channels:[
        {
            name        : "AngularNYC",
            channelId   : 'UCIv7H_9j9MHL5ghT6nqWmGQ'
        },
        {
            name        : "AngularSeattle",
            channelId   : "UCsp19MwcW-g3yOLBdO5LbSg"
        },
        {   
            name        : 'ngHouston Angular Meetup',
            channelId   : 'UC3cfVUpgrO5TK6cvH04ieSQ'
        },
        {
            name        : "ngEurope",
            channelId   : "UCEGUP3TJJfMsEM_1y8iviSQ"
        }
        ],
    },
    {
        topic: "Vue",
        channels:[
        {
            name        : "Vue NYC",
            channelId   : "UCX4w2P-M4cuWQG0WKgU3TTQ"
        }
        ]
    }
]

export type ChannelsData = {
    topic: string,
    channels: ChannelData[]
}

export type ChannelData = {       
    name: string,
    channelId: string
}    
