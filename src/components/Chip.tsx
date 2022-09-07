import Text from '@components/MuiComposed/Text';
import FilterEnums from 'types/filterEnums';

type ChipProps = {
  value: FilterEnums;
  selected?: boolean;
  handleClick: (value: FilterEnums) => void;
};

export default function Chip({
  selected = false,
  value,
  handleClick,
}: ChipProps) {
  return (
    <Text
      py="12px"
      px="16px"
      variant="body2"
      color={selected ? 'brand.secondary' : 'brand.grey_secondary'}
      onClick={() => handleClick(value)}
      fontWeight={700}
      sx={{
        backgroundColor: selected ? 'brand.secondary_light' : 'transparent',
        borderColor: selected ? 'brand.secondary' : 'brand.border_grey',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '100px',
        cursor: 'pointer',
      }}
    >
      {value}
    </Text>
  );
}
