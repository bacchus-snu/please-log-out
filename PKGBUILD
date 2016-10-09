pkgname='gnome-shell-extension-please-log-out'
pkgver=1
pkgrel=1
arch=('any')
license=('BSD')
depends=('gnome-shell>=3.20.4')

package() {
  outdir=$pkgdir/usr/share/gnome-shell/extensions/please_log_out@bacchus.snucse.org
  mkdir -p $outdir
  cp metadata.json $outdir
  cp extension.js $outdir
  licdir=$pkgdir/usr/share/licenses/$pkgname
  mkdir -p $licdir
  cp LICENSE $licdir
}
