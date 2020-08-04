
get it running:

```
yarn 
yarn dev
```
go to `http://localhost:4000/graphql`, you should be at the server's graphical postman kind thing

paste this query in

```
{
  # requires ANY authenticated person
  vehicle(id: 1) {
    pilots
  }

  # requires an ADMIN OR USER
  people(id: 2) {
    name
  }

  # requires an ADMIN
  peoples {
    name
  }

  # requires an ADMIN or USER with special permissions
  vehicles {
    name
  }
}
```

shift # to comment out or uncomment




# JWT Tokens for different scenarios

#### Unauthenticated user
```.json
{ "authorization": '' }
```

#### Authenticated Basic Visitor, no access to anything special
```.json
{ "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6W10sInJvbGVzIjpbXX0.YRfYP-SDZNztZ5D3QrTjMCqx10080Rqy5HG04-spFwI" }
```


#### Authenticated User, has NO special permissions, still has a `role=USER`
```
{ "authorization":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6W10sInJvbGVzIjpbIlVTRVIiXX0.MpQmKvgBPvodM2Bg-R9MS_NC_y1b2ozNtfQgv3fP4Ko" }
```

#### Authenticated User, `GET_VEHICLES` permission granted, `role=USER`
```.json
{ "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJHRVRfVkVISUNMRVMiXSwicm9sZXMiOlsiVVNFUiJdfQ.BceZPxkP5Qs5dFsPsyjSkSosdMqi7b7fgqAZrHuyfSA" }
```


#### Authenticated Admin, `GET_VEHICLES` permission granted, `role=ADMIN`
```.json
{ "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJHRVRfVkVISUNMRVMiXSwicm9sZXMiOlsiQURNSU4iLCJVU0VSIl19.Z2r2v_Qj9b4TeyLzHBpxX6Y8BLnTLBY_2b4aiPb7Kas" }
```

#### Authenticated Admin, NO Special Permissions, `role=ADMIN`
```.json
{ "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6W10sInJvbGVzIjpbIkFETUlOIiwiVVNFUiJdfQ.EsVxGj2oNfitTXbcqaWzo3o5fAObEDQHs52c4fO35sU" }
```