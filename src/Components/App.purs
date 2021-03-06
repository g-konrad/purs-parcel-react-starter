module Components.App where

import Prelude
import Components.Toggle (toggle)
import React.Basic.Classic (Component, JSX, createComponent, makeStateless)
import React.Basic.DOM as R

component :: Component Unit
component = createComponent "App"

app :: JSX
app =
  unit
    # makeStateless component \_ ->
        R.div_
          [ R.h1_ [ R.text "Hello world" ]
          , R.h2_ [ R.text "YOLO" ]
          , toggle { initialValue: true }
          , toggle { initialValue: false }
          ]
