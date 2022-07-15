import { useState } from "react"
import { useAPIContext } from "../../lib/context/APIContext"
import styles from "../../styles/Form.module.scss"
import { ImFilePdf } from "react-icons/im";
import { MdPictureAsPdf } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
//INPUTS
import Field from "./Field"
import Fieldset from "./Fieldset"
//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Form() {
  const [submitData, setSubmitData] = useState({});
  const apiData = useAPIContext();
  const pages = apiData?.pages;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSubmitData(inputValues => (
      { ...inputValues, [name]: value }
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submitData)
  }

  if (!pages) return <div>Loading Form...</div>;

  return (
      <form onSubmit={handleSubmit}>
        <h2 className={styles.title}>{apiData.name}</h2>
        <p className={styles.description}>{apiData.description}</p>
        <p className={styles.note}>
          <span className={styles.required}>*</span>
          &nbsp;Required field
        </p>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
        {pages && pages.map((page, index) => {
          return (
            <SwiperSlide>
              <Fieldset key={index} heading={page.heading}>
                {page.fields && page.fields.map((field, index) => {
                  return (
                    <Field
                      key={`${field}-${index}`}
                      className={styles.field}
                      type={field.type}
                      label={field.label}
                      placeholder={field.placeholder}
                      name={field.name} 
                      required={field.required}
                      rows={field.rows}
                      onKeyUp={handleChange}
                    />
                  )
                })}
              </Fieldset>
            </SwiperSlide>
          )
        })}
        </Swiper>
        <button 
          className={styles.submit}
          type="Submit"
        >
          Submit to PDF&nbsp;
          <FaFilePdf />
        </button>
      </form>
  )
}