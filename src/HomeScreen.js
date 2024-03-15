import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import requests from './Request'
import Row from './Row'

const HomeScreen = () => {
  return (
    <div>
        <Nav/>
        <Banner/>
        <Row title='NETFLIX ORIGINALS' fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>

        <Row title='TRENDING' fetchUrl = {requests.fetchTrending} />

        <Row title='TOP RATED' fetchUrl = {requests.fetchTopRated}  />

        <Row title='ACTION' fetchUrl = {requests.fetchActionMovies}  />

         <Row title='COMEDY' fetchUrl = {requests.fetchComedyMovies}  />

          <Row title='HORROR' fetchUrl = {requests.fetchHorrorMovies}  />

          <Row title='ROMANCE' fetchUrl = {requests.fetchRomanceMovies}  />

          <Row title='DOCUMENTARIES' fetchUrl = {requests.fetchDocumentaries}  />
    </div>
  )
}

export default HomeScreen
