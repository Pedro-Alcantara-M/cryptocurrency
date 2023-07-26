import { ReactElement } from "react"
import { Tooltip } from "@mui/material"

export const StyledToolTip = (props: {children: ReactElement, title: string}) => {

    return (
        <Tooltip
          title={props.title}
          placement="right"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: 'primary.main',
                '& .MuiTooltip-arrow': {
                  color: 'primary.main',
                },
              },
            },
          }}
        >
            {props.children}
        </Tooltip>
    )
}