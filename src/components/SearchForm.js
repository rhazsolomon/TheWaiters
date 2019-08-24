import React, { useState } from 'react'

export const SearchForm = (props) => {
    return (
        <div>
            <input
                type="text"
                className="input"
                id="addInput"
                placeholder="Something that needs ot be done..."
            />
            <div id="main_granular">
                <div id="walks%huts_selector">
                    <button>Walks</button>
                    <button>Huts</button>
                </div>
                <div>
                    <h1>Difficulty</h1>
                    <div>
                        <button>Beginner</button>
                        <button>Intermediate</button>
                        <button>Advanced</button>
                    </div>
                </div>

            </div>
        </div>
    )
};