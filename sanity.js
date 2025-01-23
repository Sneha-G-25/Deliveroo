import  {createClient}  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

const client  =  createClient({
    projectId: "tq27klbo",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-01-01"
})

const build = ImageUrlBuilder(client)
export const urlFor = (source) => build.image(source)

export default client