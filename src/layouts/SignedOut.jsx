import React from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={props.signIn} animated primary>
                   <Button.Content visible>Giriş Yap</Button.Content>
                   <Button.Content hidden>
                       <Icon name='sign-in'/>
                   </Button.Content>
                    </Button>
                <Button animated color="red" style={{marginLeft:"0.5em"}}>
                    <Button.Content visible>Kayıt Ol</Button.Content>
                    <Button.Content hidden>
                        <Icon name='user plus'/>
                    </Button.Content>
                    </Button>
            </Menu.Item>

        </div>
    )
}
