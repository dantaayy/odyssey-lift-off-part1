const resolvers = {
    Query: {
        // Return array of tracks for Homepage
        tracksForHome: (parent, args, {dataSources}, info) => {
            return dataSources.trackAPI.getTracksForHome()
        }
    },
    // For Track Type in our Schema
    Track: {
        // For every track type this function will run
        author: ({authorId}, args, {dataSources}, info) => {
            return dataSources.trackAPI.getAuthor(authorId)
        }
    }
};

module.exports = resolvers