// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

async function TestPubsub() {

    try {

        const pubsub = new PubSub({
            projectId: "openapi-244913",
            keyFile: "./creds.json"
        });
    
        var topicName = "Test"
        
         // Creates a new topic
         const [topic] = await pubsub.createTopic(topicName);
         console.log(`Topic ${topic.name} created.`);
    

    } catch (e) {

        console.log("error",e)

    }
    
}

TestPubsub()