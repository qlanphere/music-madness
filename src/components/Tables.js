import React from 'react'
import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import Like from './Like'

const Tables = () => {



  // const like = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]

  // const songs = ['Party in the USA', 'Mr. Brightside', 'Wonderwall', 'Love Story', 'Mama Mia', 'Sk8er Boi', 'Stacys Mom', 'Love Machine', 'Single Ladies', 'Dont Stop Mobin', 'Rock DJ', 'Beat Again', 'What Makes You Beautiful', 'Wake Me Up Before You Go-Go', 'Rockstar']
  // const artists = ['Miley Cyrus', 'The Killers', 'Oasis', 'Taylor Swift', 'ABBA', 'Avril Lavigne', 'Fountains of Wayne', 'Girls Aloud', 'Beyonce', 'S Club 7', 'Robbie Williams', 'JLS', 'One Direction', 'Wham!', 'Nickelback']



    return (

        <div className = "tablemargin border border-dark">

          
<Table striped bordered hover size="sm" >
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Link</th>
      <th>Like</th>
    </tr>
  </thead>
  <tbody>
  <Like color = 'table-success'song='Party in the USA' artist = "Miley Cyrus" link = "https://open.spotify.com/track/3E7dfMvvCLUddWissuqMwr?si=e52d0e7972b04f14"/>
  <Like color = 'table-primary'song='Mr. Brightside' artist = "The Killers" link = "https://open.spotify.com/track/7d8GetOsjbxYnlo6Y9e5Kw?si=388532ef4e25491c"/>
  <Like color = 'table-danger'song='Wonderwall' artist = "Oasis" link = "https://open.spotify.com/track/3UNAMgNHKl0fWzbZaU0fDM?si=a5603bdfb79c4fcb"/>
  <Like color = 'table-warning'song='Love Story' artist = "Taylor Swift" link = "https://open.spotify.com/track/1D4PL9B8gOg78jiHg3FvBb?si=296fc45511934432"/>
  <Like color = 'table-success'song='Mamma Mia' artist = "ABBA" link = "https://open.spotify.com/track/2TxCwUlqaOH3TIyJqGgR91?si=847dbaa933894b3b"/>
  <Like color = 'table-primary'song='Sk8er Boi' artist = "Avril Lavigne" link = "https://open.spotify.com/track/00Mb3DuaIH1kjrwOku9CGU?si=494cada2043f4516"/>
  <Like color = 'table-danger'song='Stacys Mom' artist = "Fountains of Wayne" link = "https://open.spotify.com/track/27L8sESb3KR79asDUBu8nW?si=9df00dbba91d4fac"/>
  <Like color = 'table-warning'song='Love Machine' artist = "Girls Aloud" link = "https://open.spotify.com/track/6SHvqMjPEQqyJaxuEzNcr3?si=04ae1c4d2b3a47df"/>
  <Like color = 'table-success'song='Single Ladies' artist = "Beyonce" link = "https://open.spotify.com/track/557un1HgwYMuqfWGSTmnxw?si=c6a9c85bb2084d7b"/>
  <Like color = 'table-primary'song='Dont Stop Movin' artist = "S Club 7" link = "https://open.spotify.com/track/4dzreTCcGVgeF1vCcd22AC?si=198400ae0a144b69"/>
  <Like color = 'table-danger'song='Rock DJ' artist = "Robbie Williams" link = "https://open.spotify.com/track/4pbyDPjFgfPqFTcIMC8xpK?si=a42651a1bc9b4cb4"/>
  <Like color = 'table-warning'song='Beat Again' artist = "JLS" link = "https://open.spotify.com/track/4GF6mCFaQbdqVtfbuLW7Fe?si=a72e66e6066f4d93"/>
  <Like color = 'table-success'song='What Makes You Beautiful' artist = "One Direction" link = "https://open.spotify.com/track/4cluDES4hQEUhmXj6TXkSo?si=3b30d6bf939d473e"/>
  <Like color = 'table-primary'song='Wake Me Up Before You Go-Go' artist = "Wham!" link = "https://open.spotify.com/track/0ikz6tENMONtK6qGkOrU3c?si=c97724e623f148e0"/>
  <Like color = 'table-danger'song='Rockstar' artist = "Nickelback" link = "https://open.spotify.com/track/3RlsVPIIs5KFhLFhxZ4iDF?si=56df2c513207461b"/>
    
  </tbody>
</Table>
        </div>
    )
}

export default Tables
