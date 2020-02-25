
exports.normal_digital_style = {
  $titleStyle: {
    color: 'rgba(255, 255, 255)',
    fontSize: '14px',
    fontWeight: 500,
  },
  $suffixStyle: {
    fontSize: '14px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '36px',
    color: '#FFFFFF',
    fontWeight: 400,
    fontFamily: 'Oswald',
  },
};

exports.total_count_digital_style = {
  $titleStyle: {
    color: '#2E2E2E',
    fontSize: '14px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '26px',
    color: '#2E2E2E',
    fontFamily: 'Oswald',
    fontWeight: 400,
    format: '11.11',
    letterSpacing: '0.6',

  },
  $suffixStyle: {
    fontSize: '14px',
    color: '#8F919F',
    fontWeight: 400,
  },
  $options: {
    separator: ',',
    decimalPlaces: 2,
  }
};

exports.table_header_style = {
  paddingLeft: '16px',
  height: '40px',
  verticalAlign: 'middle',
  color: '#2e2e2e',
  $fontWeight: 500,
  textAlign: 'left',
  fontSize: '14px',
  backgroundColor: '#EEF6FE'
};

exports.table_content_style = {
  fontSize: '14px',
  padding: '7px 16px',
  color: '#666666',
  lineHeight: '20px',
  textAlign: 'left',
  verticalAlign: 'top'
};

exports.percentage_number_style = {
  height: '22px',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  fontSize: '16px',
  paddingLeft: '4px',
  paddingRight: '6px',
  backgroundColor: '#155EC2',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '2px'
};

const chartTooltipOptions = {
  $tooltip: {
    $text: {
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
    $notation: {
      fill: '#007AFE',
      name: 'circle-small',
      $size: 14
    }
  },
  $tooltipOptions: {
    background: 'rgba(60, 71, 89, 0.9)',
    $text: {
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
    $title:{
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
  }
};
exports.chartTooltipOptions = chartTooltipOptions;
