using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;

namespace Resonance.Controls;

public sealed partial class BrandedSidebar : UserControl
{
    public event EventHandler<string>? NavRequested;

    public BrandedSidebar() => InitializeComponent();

    private void Nav_Click(object sender, RoutedEventArgs e)
    {
        if (sender is Button { Tag: string tag })
            NavRequested?.Invoke(this, tag);
    }
}
