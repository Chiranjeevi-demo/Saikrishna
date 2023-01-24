

// import React, { useState} from 'react'

// function Calendar() {
//    const [selectedEvent, setSelectedEvent] = useState(undefined)
//    const [modalState, setModalState] = useState(false)

//    const handleSelectedEvent = (event) => {
//       setSelectedEvent(event)
//       setModalState(true)
//    }

//    const Modal = () => {
//        return (
//           <div className={`modal-${modalState == true ? 'show' : 'hide'}`}>
//              // Here you define your modal, what you want it to contain. 
//              // Event title for example will be accessible via 'selectedEvent.title'
//           </div>
//        )
//    }

//    return (
//       <div>
//          {selectedEvent && <Modal />}
//          <Calendar
//             selectable
//              localizer={localizer}
//              events={events}
//             style={{ height: 1550 }}
//             onSelectSlot={(e) => handleSelect(e)}
//             onSelectEvent={(e) => handleSelectedEvent(e)}
//          />
//       </div>
//    )
// }

// export default Calendar;