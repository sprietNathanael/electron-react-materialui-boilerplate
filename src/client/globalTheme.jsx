import { createMuiTheme } from '@material-ui/core/styles';
import { grey, amber, red, green, blue, orange } from '@material-ui/core/colors/';

export default function globalTheme(theme) {
	return createMuiTheme({
		palette: {
			type: theme,
			// primary: grey[600],
			primary: {
				main: grey[600],
			},
			secondary: {
				main: orange['500'],
				// main: orange['A400'],
			},
			// secondary: amber[500],
			error: red,
			// Used by `getContrastText()` to maximize the contrast between the background and
			// the text.
			contrastThreshold: 3,
			// Used to shift a color's luminance by approximately
			// two indexes within its tonal palette.
			// E.g., shift from Red 500 to Red 300 or Red 700.
			tonalOffset: 0.2,
		},
		status: {
			success: green[600],
			warning: amber[700],
		},
		button: {
			creation: green[600],
			deletion: red[500],
			update: blue[500],
		},
		typography: {
			useNextVariants: true,
			fontFamily: ['Roboto', 'sans-serif'].join(','),
			h1: {
				fontSize: '2rem',
			},
			h2: {
				fontSize: '1.5rem',
			},
			h3: {
				fontSize: '1.2rem',
			},
			h4: {
				fontSize: '1rem',
			},
			h5: {
				fontSize: '0.9rem',
			},
			body1: {
				fontSize: '0.85rem',
			},
			body2: {
				fontSize: '0.75rem',
			},
		},
		overrides: {
			MuiTableCell: {
				root: {
					fontSize: '0.85rem',
				},
			},
		},
	});
}
