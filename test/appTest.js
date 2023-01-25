const expect = require("chai").expect;
const request = require("supertest");
const server = require("../index");
const mongoose = require("mongoose");

var app=request.agent(server);

// describe ("POST FUNCTION", function(){

//     describe("USER REGISTER",function(){
//         it("USER REGISTER",function(){
//             app
//             .post("/auth/register")
//             .send({
//                 username:"webapp",
//                 email:"webapp@gmail.com",
//                 password:"12121212",
//             })
//             .end((err,res)=>{
//                 expect(res.body.user).to.equal(true);
//                 expect(res.token).to.equal(true);

                
//             });
//         });


//     });

//_______________________________________________________________________________________

//USER LOGIN*****************************
describe ("POST FUNCTION", function(){


        describe("USER LOGIN",function(){
            it("USER AUTH",function(){
                app
                .post("/auth/login")
                .send({
                    email:"himanshu@gmail.com",
                    password:"123123123",
                })
                .end((err,res)=>{
                    // // expect(res.body.user).to.equal(true);
                    expect(res.body.rt).to.equal(true);
                });
            });
    
    
        });

        /*RESULT :  actual: {
        _id: '63cf8e616475b2719bff793f',
         username: 'himanshu',
        email: 'himanshu@gmail.com',
        followings: [],
        createdAt: '2023-01-24T07:53:05.339Z',
        updatedAt: '2023-01-24T07:53:05.339Z',
        __v: 0
        },*/
    //_______________________________________________________________________________________
    

    //FOLLOW/UNFOLLOW*****************************************

    describe("/follow_unfollow", () => {
        it("It should follow/Unfollow user", (done) => {
          chai
            .request(app)
            .get("/users")
            .set({ Authorization: `Bearer ${token}` })
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("users");
              done();
            });
        });


        app
                .post("/auth/login")
                .send({
                    email:"himanshu@gmail.com",
                    password:"123123123",
                })
                .end((err,res)=>{
                    // // expect(res.body.user).to.equal(true);
                    expect(res.body.rt).to.equal(true);
                });
            

      });


    //_______________________________________________________________________________________

});