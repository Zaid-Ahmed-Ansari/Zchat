import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'

const api_key = 'r39guf4ha3x2';
const api_secret = '6bzsq28vpgb6mj37fcukesy3yry7amac8wcww89yxhx39bg5872spkruqb5yxbrz';
// const user_id = "user_2rUBq2JIXEKiqGqmRoFw6s1GL55";

function capitalize(str) {
    if (typeof str !== 'string' || !str) {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  const user = await request.json();
  
  const token = serverClient.createToken(user.data.id);  
 
    
    const client = await clerkClient()
    await serverClient.upsertUser({id:user.data.id})
  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token
    },
  })
    const slugs = ['python', 'javascript', 'java', 'c++', 'ruby', 'html']
    slugs.forEach(async (item)=>{
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(item) + 'Discussion',
            
            created_by_id: user.data.id
        });
        await channel.create();
        channel.addMembers([user.data.id])
    })
  


  return Response.json({ message: "Hello World" });
}
