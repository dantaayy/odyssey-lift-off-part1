const resolvers = {
    Query: {
        // Return array of tracks for Homepage
        tracksForHome: (parent, args, { dataSources }, info) => {
            return dataSources.trackAPI.getTracksForHome()
        },
        // get a single track by id for the track page
        track: (parent, { id }, { dataSources }, info) => {
            return dataSources.trackAPI.getTrack(id)
        },
    },
    // For Track Type in our Schema
    Track: {
        // For every track type this function will run
        author: ({ authorId }, args, { dataSources }, info) => {
            return dataSources.trackAPI.getAuthor(authorId)
        },
        modules: ({ id }, args, { dataSources }, info) => {
            return dataSources.trackAPI.getTrackModules(id)
        }
    }
};

module.exports = resolvers