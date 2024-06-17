// This script configure the adapter for Enzyme.
import { configure } from 'enzyme';
import '@testing-library/jest-dom';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });
