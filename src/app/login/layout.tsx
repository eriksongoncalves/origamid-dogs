import React from "react"

import styles from "./login.module.css"

type LoginLayoutProps = {
  children: React.ReactNode
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  )
}
