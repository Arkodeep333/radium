const axios = require("axios");
const e = require("cors");

// res.status(200). send( { data: userDetails } )

const getStatesList = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    const cowinStates = await axios(options);

    console.log("WORKING");
    let states = cowinStates.data;
    res.status(200).send({ msg: "Successfully fetched data", data: states });

  } 
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};


const getDistrictsList = async function (req, res){

    try{ 
        let id= req.params.stateId
        console.log(" state: ", id)

        let options = {
            method: "get",
            url : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}` //plz take 5 mins to revise template literals here
        }
        let response= await axios(options)

        let districts= response.data
        
        console.log(response.data)
        res.status(200).send( {msg: "Success", data: districts} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}

const getByPin = async function (req, res){

    try{ 

        let pin= req.query.pincode
        let date= req.query.date

        let options = {
          method : "get",
          url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let response= await axios(options)
        


        let centers= response.data
        console.log(centers)
        res.status(200).send( {msg: "Success", data: centers} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}


const getOtp = async function (req, res){

    try{ 

         let options = {
          method : "post", // method has to be post
          url : `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
          data: { "mobile": req.body.mobile  } // we are sending the json body in the data 
        }
        let response= await axios(options)

        let id= response.data
        res.status(200).send( {msg: "Success", data: id} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}

// ---------------------------------------------------25/11/21--------------------------------------------------------

const gettemp = async function (req, res){

  try{ 

        let q= req.query.q
        let appid= req.query.appid
    let temps = {

          method : "get",
          url : `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
    }

      let a = await axios(temps)
      let tempdata = a.data.main.temp
      res.status(200).send({temperature: tempdata})



  }
  catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
  }
}

const citytemps = async function (req, res){

  try{ 
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

        let empty = []
        
        for(let i=0; i<cities.length; i++){
          let citiesobj = {x : cities[i]}
          let citytemps = {
            method : "get",
            url : `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=501c4da9141bac955a83bc7512e6bdfd`
             }
  
              let a = await axios(citytemps)
            
              let t = a.data.main.temp
              citiesobj.temp = t

              empty.push(citiesobj)
        }
        console.log(empty)
       let sorted = empty.sort((a,b)=> a.temp - b.temp)
      //  console.log(sorted)
       res.status(200).send({msg: sorted})



      }   
  catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
  }
}





module.exports.getStatesList = getStatesList;
module.exports.getDistrictsList = getDistrictsList;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.gettemp = gettemp
module.exports.citytemps = citytemps