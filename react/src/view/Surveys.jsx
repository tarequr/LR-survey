import React from 'react'
import PageComponent from '../components/PageComponent'
import { useStateContext } from '../contexts/ContextProvider'

function Surveys() {
  const { surveys } = useStateContext();
  console.log(surveys);
  return (
    <PageComponent>
      Surveys Content
    </PageComponent>
  )
}

export default Surveys
