import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Portal, Snackbar} from "react-native-paper";
import {useSelector} from "react-redux";


const Status = () => {
    const status = useSelector((state) => state['status'])
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(status['error']){
            setVisible(true)
        }
    }, [status]);

    return (
        <Portal>
            <Snackbar
                style={style.snackbar}
                visible={visible}
                duration={5000}
                onDismiss={() => setVisible(false)}>
                {status['error']}
            </Snackbar>
        </Portal>
    );
};

const style = StyleSheet.create({
    snackbar: {
        zIndex: 9999,
        position: 'absolute',
        bottom: 0
    }
});

export default Status;
