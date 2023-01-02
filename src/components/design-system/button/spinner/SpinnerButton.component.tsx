import React, {FC} from 'react';

// Styles
import styles from './SpinnerButton.module.scss';

// Model
import {SpinnerButtonModel} from '@/components/design-system/button/spinner/SpinnerButton.model';

const SpinnerButton: FC<SpinnerButtonModel> = ({color}) => {
	return (
		<div className={`fx_cl fx_jc fx_ac ${styles._wr}`}>
			<div className={`fx ${styles.spin_wr} ${color === 'orange' ? styles.orange : ''}`}>
				<div className={styles.bnc_1} />
				<div className={styles.bnc_2} />
				<div className={styles.bnc_3} />
			</div>
		</div>
	);
}

export default SpinnerButton;