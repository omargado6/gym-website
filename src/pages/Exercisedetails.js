import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Details from '../components/Details'
import { useParams } from 'react-router-dom';
import { fetchData, exerciseOptions, youtubeOptions } from '../utlis/fetchData';
import Youtubedetalis from '../components/Youtubedetalis';
import SimilarEx from '../components/SimilarEx';
function Exercisedetails() {
  const [exersice, setexersice] = useState({});
  const [youtubevid, setyoutubevid] = useState([]);

  const [targetExercises, settargetExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchdata = async () => {
      const exersiceDbURl = 'https://exercisedb.p.rapidapi.com'
      const youtubeURl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exercisedetaildata = await fetchData(`${exersiceDbURl}/exercises/exercise/${id}`, exerciseOptions);
      setexersice(exercisedetaildata)

      const youtubedetaildata = await fetchData(`${youtubeURl}/search?query=${exercisedetaildata.name} exercise`, youtubeOptions);
      setyoutubevid(youtubedetaildata.contents)

      const targetMuscleExercisesData = await fetchData(`${exersiceDbURl}/exercises/target/${exercisedetaildata.target}`, exerciseOptions);
      settargetExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exersiceDbURl}/exercises/equipment/${exercisedetaildata.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);

    }
    fetchdata()
  }, [id])
  // if (!exersice) return <div>No Data</div>;
  return (
    <Stack>
      <Details exersice={exersice} />
      <Youtubedetalis youtubevid={youtubevid} name={exersice.name} />
      <SimilarEx targetExercises={targetExercises} equipmentExercises={equipmentExercises} />
    </Stack>
  )
}

export default Exercisedetails