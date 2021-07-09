import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="rigt" src="data:image/jpeg;base64,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"/>
            <Dropdown pointing="top right" text="Özge">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
                </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
        </div>
    )
}
