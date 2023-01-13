import AvatarUsers from "../../AvatarUsers";
import { ModalButton } from "../../Button/ModalButton/ModalButton";
import { CheckBox } from "../../CheckBox/CheckBox";
import TimeZone from "../../TimeZone/TimeZone";
import { ColumnsProps, User } from "../interface";
import styles from '../Table.module.css'

export const columns:ColumnsProps[] = [
    {
        field: 'check',
        headerName: 'check',
        width: '5%',
        renderCell: (params, action) => <CheckBox user={params as User} onChange={(e) => action(e, params as User)} defaultChecked={params.check} />
    },
    {
        field: 'user',
        headerName: 'User',
        width: '25%',
        renderCell: (params, action) => {
            console.log('params', params);

            return <div className={styles.containerAvatar}>
                <AvatarUsers size='md' text={params.name}
                    backgroundColor='var(--teal500)'
                    createBy={`${params.name} ${params.lastname}`}
                    emailUser={params.email}
                    imageSrc={params.image && `http://localhost:4000/api/users/image/${params.image.file_name}`}
                />
            </div>
        }
    },
    {
        field:'phone',
        headerName:'Phone',
        width:'13%',
        renderCell: (params, action)=><p className={styles.styleBody}>{params.phone}</p>
    },
    {
        field:'birthday',
        headerName:'Birthday',
        width:'10%',
        renderCell: (params, action)=><p className={styles.styleBody}>{params.birthday}</p>
    },
    {
        field:'language',
        headerName:'Language',
        width:'10%',
        renderCell: (params, action)=><p className={styles.styleBody}>{params.language}</p>
    },
    {
        field:'Timezone',
        headerName:'Timezone',
        width:'23%',
        renderCell: (params, action)=><div className={styles.styleBody}><TimeZone size="md" time={params.timezone} zone={params.timezone}/></div>
    }
    ,
    {
        field:'actions',
        headerName:'',
        width:'3%',
        renderCell: (params, action)=><div className={styles.containerAvatar}><ModalButton
        iconName="Pencil" user={params as User}/></div>
    }
]