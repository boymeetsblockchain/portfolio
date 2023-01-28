import React from 'react'

function Backend() {
  return (
    <div className="skills__content">
        <h3 className="skills__title">BackEnd Developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Node js</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Express</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
               

            </div>
            <div className="skills__group">
            <div className="skills__data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">MongoDb</h3> 
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend